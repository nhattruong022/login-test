export interface Paging {
    count_item: number;
    total_page: number;
    current_page: number;
    limit: number;
}

export interface DataListResponse<T> {
    items: T[];
    pagination: Paging;
}

export interface ApiResponse<T> {
    success: boolean;
    status: number;
    messages: string[];
    data: T;
}

export interface Pagination {
    countItem: number;
    totalPage: number;
    currentPage: number;
    limit: number;
}

export interface BaseSearch {
    loadingCondition?: boolean;
    search_text?: string;
    page?: number;
    limit?: number;
}

export interface BaseModel {
    id?: string;
    created_by?: string;
    updated_by?: string;
    deleted_by?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
}
