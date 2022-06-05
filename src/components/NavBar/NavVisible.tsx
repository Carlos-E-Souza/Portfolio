import { useState, useEffect, useRef } from "react"

export default function useComponentVisible(initialIsVisible: boolean) {
    const [isNavBarVisible, setIsNavBarVisible] = useState(initialIsVisible)
    const ref = useRef<HTMLDivElement>(null)

    const handleClickOutside = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsNavBarVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
        return () => {
            document.removeEventListener("click", handleClickOutside, true)
        }
    })

    return { ref, isNavBarVisible, setIsNavBarVisible }
}
