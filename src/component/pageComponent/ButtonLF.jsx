import { Button } from 'antd';

const ButtonLF100 = (props) => {
    return (
        <Button
            style={{
                borderRadius: "20px",
                width: "100px",
                backgroundColor: "white",
                color: "black",
                padding:"1px 1px 1px 1px",
                margin:"3px",
                fontWeight:'bold',
                fontFamily:'S-CoreDream-3Light'
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
                backgroundColor: "white",
                color: "black",
                padding:"1px 1px 1px 1px",
                margin:"3px",
                fontWeight:'bold',
                fontFamily:'S-CoreDream-3Light'
            }}>
            {props.value}
        </Button>
    )
};

export {ButtonLF100, ButtonLF50};