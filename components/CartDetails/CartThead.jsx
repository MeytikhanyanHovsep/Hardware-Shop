import React from 'react'
import { memo } from 'react'

export default memo(function CartThead() {
    return (
        <thead>
            <tr>
                <th className="px-6 py-3 text-left text-[20px] font-semibold text-gray-600">Product</th>
                <th className="px-6 py-3 text-left text-[20px] font-semibold text-gray-600">Price</th>
                <th className="px-6 py-3 text-left text-[20px] font-semibold text-gray-600">Quantity</th>
                <th className="px-6 py-3 text-left text-[20px] font-semibold text-gray-600">Subtotal</th>
                <th className="px-6 py-3 text-left text-[20px] font-semibold text-gray-600"></th>
            </tr>
        </thead>
    )
})