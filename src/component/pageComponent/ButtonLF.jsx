import { Button } from 'antd';

const ButtonLF100 = (props) => {
    return (
        <Button
            style={{
                borderRadius: "20px",
                width: "100px",
                backgroundColor: "#FE8F8D",
                color: "white",
                padding:"1px 1px 1px 1px"
            }}>
            {props.value}
        </Button>
    )
};

const ButtonLF50 = (props) => {
    return (
        <Button
            style={{
                borderRadius: "20px",
                width: "50px",
                backgroundColor: "#FE8F8D",
                color: "white",
                padding:"1px 1px 1px 1px"
            }}>
            {props.value}
        </Button>
    )
};

export {ButtonLF100, ButtonLF50};