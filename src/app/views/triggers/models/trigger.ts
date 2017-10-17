export interface Trigger {
  key: string;
  className: string;
  jobKey: string;
  description?: string;
  cronExpression: string;
  startTime: string;
}
