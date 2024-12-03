

export default function Education(props) {

    return (
            <ul className="list-disc mt-5">
                <li>{props.data.year}</li>
                <li>{props.data.degree}</li>
                <li>{props.data.university}</li>
                <li>{props.data.faculty}</li>
                <li>{props.data.country}</li>
            </ul>
    )
}