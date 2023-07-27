function Link ({href, className, children}) {
    const onClick = (event) => {
        event.preventDefault()
        window.history.pushState({}, '', href)
    
        const navEvent = new PopStateEvent('popState')
        window.dispatchEvent(navEvent)
    }
    
        return <a onClick={onClick} href={href} className={className}>
            {children}
        </a>
    }
    
    export default Link