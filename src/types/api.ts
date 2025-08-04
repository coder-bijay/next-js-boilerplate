export interface PaginationParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export interface DateRange {
  from: Date;
  to: Date;
}

export interface DashboardMetrics {
  revenue: {
    current: number;
    previous: number;
    change: number;
  };
  users: {
    total: number;
    active: number;
    new: number;
  };
  orders: {
    total: number;
    pending: number;
    completed: number;
  };
  analytics: {
    pageViews: number;
    uniqueVisitors: number;
    bounceRate: number;
  };
}