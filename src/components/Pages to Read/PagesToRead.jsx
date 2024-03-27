import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0085F6', '#00C29C', '#FBB929', '#FC8066', '#FB0100'];

const data = [
    {
        name: 'The Great Gatsby',
        uv: 192,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'To kill a mocking bird',
        uv: 281,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '1984',
        uv: 328,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'The Lord of the Rings',
        uv: 177,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Pride and prejudice',
        uv: 279,
        pv: 4800,
        amt: 2181,
    }
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
    return (
        <div className="flex justify-center px-32 pb-12">
            <div className="bg-[#13131308]">
                <BarChart
                    width={1140}
                    height={600}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default PagesToRead;
