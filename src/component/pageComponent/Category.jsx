import { Select } from 'antd';
const Category = () => (
  <Select
    showSearch
    style={{
      width: 400,
    }}
    placeholder="Search to Select"
    optionFilterProp="category"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      }
     
    ]}
  />
);
export default Category;

