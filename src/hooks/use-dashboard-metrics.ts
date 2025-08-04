import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/config/api-client";
import { DashboardMetrics, DateRange } from "@/types/api";

interface UseDashboardMetricsOptions {
  dateRange?: DateRange;
  enabled?: boolean;
  refetchInterval?: number;
}

export function useDashboardMetrics(options: UseDashboardMetricsOptions = {}) {
  const { dateRange, enabled = true, refetchInterval } = options;

  return useQuery({
    queryKey: ["dashboard-metrics", dateRange],
    queryFn: async () => {
      const params = new URLSearchParams();
      
      if (dateRange?.from) {
        params.append("from", dateRange.from.toISOString());
      }
      if (dateRange?.to) {
        params.append("to", dateRange.to.toISOString());
      }

      const response = await apiClient.get<DashboardMetrics>(
        `/dashboard/metrics?${params.toString()}`
      );
      
      return response.data;
    },
    enabled,
    refetchInterval,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}