'use client'

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import "./FootNav.css"

export function nameForPath(options, path) {
    return options.find(o=>o.path===path)?.name || 'Unknown'
}

export default function FootNav({options = []}) {

    const [collapsed, setCollapsed] = useState(true)
    const router = useRouter()
    const path = usePathname()

    function uncollapse() {
        setCollapsed(false)
    }

    function collapse() {
        setCollapsed(true)
    }

    return (
        collapsed ? (
            <div className="collapsedFooter" onClick={uncollapse}>
                <div>&#9650;</div>
                <div className="selectedView">{nameForPath(options, path)}</div>
                <div>&#9650;</div>
            </div>
        )
        :
        (
            <div className="viewList" onClick={collapse}>
                { options.map((option) => (
                    <div 
                        key={option.path} 
                        className="viewSelector"
                        onClick={() => {router.push(option.path)}}
                    >{option.name}</div>
                ))}
                <div className="collapsedFooter" onClick={collapse}>
                    <div>&#9660;</div>
                    <div className="cancel">Cancel</div>
                    <div>&#9660;</div>
                </div>
            </div>
        )
    )
}