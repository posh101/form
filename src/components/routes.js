import {useState, useEffect} from 'react';

const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
     const onChangeNavigation = () => {
       setCurrentPath(window.location.pathname)
     }
      window.addEventListener('popState', onChangeNavigation)

      return () => {
        window.removeEventListener('popState', onChangeNavigation)
      }
    })

    return currentPath === path ? children : null
}

export default Route;