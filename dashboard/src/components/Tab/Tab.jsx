import { useEffect, useRef, useState } from 'react';

function Tab(props) {
    const { tabData, ...rest } = props;

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    const tabsRef = useRef([]);

    useEffect(() => {
        function setTabPosition() {
            const currentTab = tabsRef.current[activeTabIndex];
            console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
        }

        setTabPosition();
        window.addEventListener('resize', setTabPosition);

        return () => window.removeEventListener('resize', setTabPosition);
    }, [activeTabIndex]);

    return (
        <div>
            <div className="relative">
                <div className="flex space-x-3 border-b justify-center">
                    {tabData.map((tab, idx) => {
                        return (
                            <button
                                key={idx}
                                ref={(el) => (tabsRef.current[idx] = el)}
                                className="pt-2 pb-3"
                                onClick={() => setActiveTabIndex(idx)}
                            >
                                {tab.title}
                            </button>
                        );
                    })}
                </div>
                <span
                    className="absolute bottom-0 block h-1 bg-blue-500 transition-all duration-300"
                    style={{
                        left: tabUnderlineLeft,
                        width: tabUnderlineWidth,
                    }}
                />
            </div>
            <div className="py-2">
                <div className="items-center justify-center text-center">
                    {tabData[activeTabIndex].content}
                </div>
            </div>
        </div>
    );
}

export default Tab;
