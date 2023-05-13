import { Radio, Space, } from 'antd';

interface IOptionProps {
    selectedOption: any
    option: any
    handleOptionSelect: any
    ind: any
}
const OptionProps = (props: IOptionProps) => {
    const { selectedOption, option, handleOptionSelect, ind } = props;
    return (
        <div
            style={{
                marginTop: "10px",
                marginBottom: "10px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                padding: "15px",
                borderRadius: "10px",
                background: selectedOption === option ? "#D1FFBD" : "#fff",
                maxWidth: "600px",
                width: "100%",
                lineHeight: '1px',
                textAlign: 'start'
            }}
            key={ind}
        >
            <Radio.Group value={selectedOption} onChange={(e) => handleOptionSelect(option)} >
                <Space direction="vertical">
                    <Radio style={{ fontSize: "18px", fontFamily: "roboto" }} value={option}>{option}</Radio>
                </Space>
            </Radio.Group>
        </div>
    )
}

export default OptionProps
