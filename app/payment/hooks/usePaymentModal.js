import { useState } from 'react'

export const usePaymentModal = () => {
  const [selectedPayment, setSelectedPayment] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  const openModal = (paymentMethod) => {
    setSelectedPayment(paymentMethod)
    setShowPopup(true)
  }

  const closeModal = () => {
    setShowPopup(false)
    setSelectedPayment(null)
  }

  const isModalOpen = Boolean(showPopup && selectedPayment)

  return {
    selectedPayment,
    showPopup,
    isModalOpen,
    openModal,
    closeModal
  }
}