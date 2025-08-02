'use client'
import { useState, useEffect } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 w-12 h-12 bg-primary hover:bg-primary-dark text-text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
          aria-label="Back to top"
        >
          <IoIosArrowUp size={24} />
        </button>
      )}
    </>
  )
}
export default BackToTopButton