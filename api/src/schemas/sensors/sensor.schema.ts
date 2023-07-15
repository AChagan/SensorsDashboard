import mongoose, { Schema, Document } from 'mongoose';

export interface ISensor extends Document {
  sensorId: string;
  temperature: number;
  humidity: number;
  c02: number;
}

const SensorSchema: Schema = new Schema({
  sensorId: { type: String, required: true },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  c02: { type: Number, required: true },
});

export default mongoose.model<ISensor>('Sensor', SensorSchema);

const SensorModel = mongoose.model('Sensor', SensorSchema);
export { SensorModel };
