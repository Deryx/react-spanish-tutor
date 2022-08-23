import Texinput from '../textInput.tsx';

function Tensesection( props: any ) {
    return (
        <div>
            <section id={ props.tense }>
                <h4>{ props.tense }</h4>
                <Texinput id={ `${ props.tense }Yo` } name="Yo" className="col-lg-12" />
                <Texinput id={ `${ props.tense }Tu` } name="Tu" className="col-lg-12" />
                <Texinput id={ `${ props.tense }El` } name="El/Ella/Usted" className="col-lg-12" />
                <Texinput id={ `${ props.tense }Nosotros` } name="Nosotros" className="col-lg-12" />
                <Texinput id={ `${ props.tense }Vosotros` } name="Vosotros" className="col-lg-12" />
                <Texinput id={ `${ props.tense }Ellos` } name="Ellos/Ellas/Ustedes" className="col-lg-12" />
            </section>
        </div>
    )
}

export default Tensesection;