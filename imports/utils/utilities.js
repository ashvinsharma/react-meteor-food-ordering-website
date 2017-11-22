import * as React from 'react'

const Utilities = {
    formatMoney: (cell) => {
        return `₹${cell}`
    },

    showAssignee: (cell) => {
        return cell[1].charAt(0).toUpperCase() + cell[1].slice(1)
    },

    formatStatus: (cell) => {
        return cell.charAt(0).toUpperCase() + cell.slice(1)
    },

    showType: (cell) => {
        if (typeof cell !== 'undefined') {
            const items = cell.map((item) =>
                <li key={item._id}>{item.name}-{item.quantity}</li>
            )
            return (<ol>{items}</ol>)
        }
    }
}

export default Utilities