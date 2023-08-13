import mongoose, { Schema, Document } from 'mongoose';

export interface ISensorReading extends Document {
  sensorId: string;
  temperature: number;
  humidity: number;
  c02: number;
  createdTs: string;
}

const SensorReadingSchema: Schema = new Schema({
  sensorId: { type: String, required: true },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  c02: { type: Number, required: true },
  createdTs: { type: String, required: true },
});

export default mongoose.model<ISensorReading>(
  'Sensor_Reading',
  SensorReadingSchema,
);

const SensorReadingModel = mongoose.model(
  'Sensor_Reading',
  SensorReadingSchema,
);
export { SensorReadingModel };
