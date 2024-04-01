import React from 'react';

function MacBookStyleSearchBar() {
    return (
        <div className="max-w-md mx-auto">
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-xl shadow-xl bg-white overflow-hidden" style={{ backgroundColor: '#EBEBEB' }} >
                <div className="grid place-items-center h-full w-12 text-gray-300 pb-10 pt-3" style={{ backgroundColor: '#EBEBEB' }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 ml-4"
                    type="text"
                    id="search"
                    placeholder="Cari Produk Sekarang"
                    style={{ backgroundColor: '#EBEBEB', width: '1000px' }}
                />
            </div>
        </div>
    );
}

export default MacBookStyleSearchBar;
