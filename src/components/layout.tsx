import Siteheader from './siteHeader';

function Layout( props: any ) {
    return (
        <div>
            <Siteheader />
            { props.children }
        </div>
    )
}

export default Layout;