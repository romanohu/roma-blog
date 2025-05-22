

type Props = {
    children: React.ReactNode;
};

export default function Box({ children }: Props) {
    return (
        <div style={{ border: "1px solid #000", padding: "10px", margin: "10px" }}>
            {children}
        </div>
    );
}
    