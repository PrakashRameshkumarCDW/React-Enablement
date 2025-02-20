import './Acknowledgement.css';

const Acknowledgement = ({ name, from, to }: {
    name: string;
    from: string;
    to: string;
}) => {


    return (
        <div className="Acknowledgement-container">
            <div className="message-box">
                <p>
                    Thank You <span className="info">{name}</span> for expressing your interest in travelling with us.
                    Our Sales team will get back with the best packages from{" "}
                    <span className="info">{from}</span> to{" "}
                    <span className="info">{to}</span>.
                </p>
            </div>
        </div>
    );


}

export default Acknowledgement;