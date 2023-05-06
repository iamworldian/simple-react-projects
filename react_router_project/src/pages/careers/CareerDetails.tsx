import { useLoaderData, useParams } from 'react-router-dom';

export default function CareerDetails() {
    const { id } = useParams();
    const career = useLoaderData();
    return (
        <div className="career-details">
            <h1>{career.title}</h1>
            <p>{career.id}</p>
            <p>{career.salary}</p>
            <p>{career.location}</p>
        </div>
    );
}

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch(`http://localhost:3003/careers/${id}/`);
    if(!res.ok){
        throw new Error('Could not find the details');
    }
    return res.json();
};
