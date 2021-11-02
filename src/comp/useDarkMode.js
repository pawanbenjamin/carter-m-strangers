// I wanted to give my app a Dark mode. Im really liking >>>
//  >>>how easy it is to see my code with the dark theme.

const matchDark = '(prefers-color-scheme: dark)'
// I wanted to make it a light theme durning the day and a dark one at night. 
function useDarkaMode() {
    const [isDark, setIsDark] = React.useState(
        () => window.matchMedia && window.matchMedia(matchDark).matches
    )
    
    React.useEffect(() => {
        const matcher = window.matchMedia(matchDark)
        const onChange = ({ matches }) => setIsDark(matches)
        matcher.addListerner(onChange)
        return ( => {
            matcher.removerListener(onChange)
        }
    }, [setIsDark])


    return isDark

}
