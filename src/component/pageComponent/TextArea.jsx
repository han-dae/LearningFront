import { Input } from 'antd';
const { TextArea } = Input;
const onChange = (e) => {
  console.log('Change:', e.target.value);
};
const InputTextArea = () => (
  <>
    <TextArea
      showCount
      maxLength={800}
      style={{
        height: 350,
        width : 400,
        resize: 'none',
      }}
      onChange={onChange}
      placeholder="스크립트를 적어보세요"
    />
  </>
);
export default InputTextArea;