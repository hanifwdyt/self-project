// Payment methods configuration
export const PAYMENT_METHODS = [
  { 
    id: 'bca', 
    name: 'BCA', 
    logo: '/assets/images/payment-logo/BCA Logo.webp', 
    color: 'from-blue-500 to-blue-600',
    accountNumber: '7651381171',
    accountHolder: 'Hanif Tri Widiyanto',
    type: 'bank'
  },
  { 
    id: 'dana', 
    name: 'Dana', 
    logo: '/assets/images/payment-logo/Dana Logo Blue.png', 
    color: 'from-cyan-500 to-blue-500',
    accountNumber: '087872753959',
    accountHolder: 'Hanif Tri Widiyanto',
    type: 'ewallet'
  },
  { 
    id: 'seabank', 
    name: 'Seabank', 
    logo: '/assets/images/payment-logo/Seabank Logo.png', 
    color: 'from-teal-500 to-cyan-600',
    accountNumber: '901558601593',
    accountHolder: 'Hanif Tri Widiyanto',
    type: 'bank'
  },
  { 
    id: 'linebank', 
    name: 'Line Bank', 
    logo: '/assets/images/payment-logo/Line Bank Logo.png', 
    color: 'from-green-500 to-emerald-500',
    accountNumber: '19333071960',
    accountHolder: 'Hanif Tri Widiyanto',
    type: 'bank'
  },
  { 
    id: 'shopee', 
    name: 'ShopeePay', 
    logo: '/assets/images/payment-logo/ShopeePay Logo.png', 
    color: 'from-orange-500 to-red-500',
    accountNumber: '081234567890',
    accountHolder: 'Hanif T. Widiyanto',
    type: 'ewallet'
  },
  { 
    id: 'gopay', 
    name: 'Gopay', 
    logo: '/assets/images/payment-logo/GoPay Logo.png', 
    color: 'from-green-600 to-green-700',
    accountNumber: '087872753959',
    accountHolder: 'Hanif Tri Widiyanto',
    type: 'ewallet'
  },
  { 
    id: 'ovo', 
    name: 'OVO', 
    logo: '/assets/images/payment-logo/Ovo Logo.png', 
    color: 'from-purple-500 to-indigo-600',
    accountNumber: '087872753959',
    accountHolder: 'Hanif Tri Widiyanto',
    type: 'ewallet'
  },
  { 
    id: 'qris', 
    name: 'QRIS', 
    logo: '/assets/images/payment-logo/QRIS Logo Indonesia.png', 
    color: 'from-red-500 to-pink-600',
    accountNumber: '',
    accountHolder: '',
    type: 'qr'
  }
]


// Payment method helper functions
export const getPaymentMethodById = (id) => {
  return PAYMENT_METHODS.find(method => method.id === id)
}

export const getPaymentMethodsByType = (type) => {
  return PAYMENT_METHODS.filter(method => method.type === type)
}

export const isQRISPayment = (methodId) => {
  return methodId === 'qris'
}