import { NextRequest, NextResponse } from "next/server";
import { DashboardMetrics } from "@/types/api";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const dateRange = {
      from: searchParams.get("from"),
      to: searchParams.get("to"),
    };

    const mockMetrics: DashboardMetrics = {
      revenue: {
        current: 45231.89,
        previous: 37689.12,
        change: 20.1,
      },
      users: {
        total: 2350,
        active: 1892,
        new: 180,
      },
      orders: {
        total: 12234,
        pending: 45,
        completed: 12189,
      },
      analytics: {
        pageViews: 89234,
        uniqueVisitors: 34567,
        bounceRate: 2.4,
      },
    };

    return NextResponse.json({
      data: mockMetrics,
      success: true,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch dashboard metrics",
        success: false,
        status: 500,
      },
      { status: 500 }
    );
  }
}