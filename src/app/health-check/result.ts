export interface Result {
    checks: Check[];
  totalStatus: string;
  totalResponseTime: number;
}

interface Check {
    name: string;
    responseTime: number;
    status: string;
    description: string;
  }
  