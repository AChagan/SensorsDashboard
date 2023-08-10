import mongoose, { Schema, Document } from 'mongoose';

export interface ISensorReading extends Document {
  sensorId: string;
  temperature: number;
  humidity: number;
  c02: number;
}

const SensorReadingSchema: Schema = new Schema({
  sensorId: { type: String, required: true },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  c02: { type: Number, required: true },
});

export default mongoose.model<ISensorReading>(
  'Sensor_Reading',
  SensorReadingSchema,
);

const SensorReadingsModel = mongoose.model(
  'Sensor_Reading',
  SensorReadingSchema,
);
export { SensorReadingsModel as SensorReadingModel };
