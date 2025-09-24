type ApiResponse<T> = {
    data: T;
    success: boolean;
}

const r1: ApiResponse<string> = { data: "ok", success: true };
const r2: ApiResponse<number[]> = { data: [1, 2, 3], success: false };