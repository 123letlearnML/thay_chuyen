import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProductList from '../../src/slideSanPham/ProductList';  // Điều chỉnh theo cấu trúc thư mục
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import { TextEncoder, TextDecoder } from 'util';

// Thêm polyfill nếu `TextEncoder` chưa được định nghĩa
if (typeof global.TextEncoder === 'undefined') {
    global.TextEncoder = TextEncoder;
    global.TextDecoder = TextDecoder;
}
jest.mock('axios');  // Mock axios để không gọi API thật

// Mock URL.createObjectURL để tránh lỗi trong môi trường
beforeAll(() => {
    global.URL.createObjectURL = jest.fn(() => 'mocked-url');
});

afterAll(() => {
    jest.restoreAllMocks();  // Khôi phục lại các mock sau khi kiểm thử
});

describe('ProductList Component', () => {
    it('should render product list correctly', async () => {
        // Mock response từ API
        const mockData = [
            { maSanPham: 1, tenSanPham: 'iPhone 12', gia: 12000000, hinhAnhUrl: 'iphone12.jpg' },
            { maSanPham: 2, tenSanPham: 'Samsung Galaxy S21', gia: 15000000, hinhAnhUrl: 'galaxyS21.jpg' },
        ];
        axios.get.mockResolvedValue({ data: { content: mockData } });

        render(
            <MemoryRouter>
                <ProductList />
            </MemoryRouter>
        );

        // Kiểm tra trạng thái loading
        expect(screen.getByText('Đang tải...')).toBeInTheDocument();

        // Chờ cho danh sách sản phẩm hiển thị
        await waitFor(() => screen.getByText('iPhone 12'));

        // Kiểm tra các sản phẩm hiển thị trong UI
        expect(screen.getByText('iPhone 12')).toBeInTheDocument();
        expect(screen.getByText('Samsung Galaxy S21')).toBeInTheDocument();

        // Đảm bảo rằng không còn trạng thái loading
        expect(screen.queryByText('Đang tải...')).toBeNull();
    });

    it('should show error message when API fails', async () => {
        // Mock lỗi API
        axios.get.mockRejectedValue(new Error('API Error'));

        render(
            <MemoryRouter>
                <ProductList />
            </MemoryRouter>
        );

        // Kiểm tra thông báo lỗi khi tải sản phẩm thất bại
        await waitFor(() => screen.getByText('Có lỗi khi tải dữ liệu: API Error'));
        expect(screen.getByText('Có lỗi khi tải dữ liệu: API Error')).toBeInTheDocument();
    });
});
