import  { useState } from 'react';
import { Table, Input, Button } from 'antd';

function Balancete() {
    const [entries, setEntries] = useState([]);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const columns = [
        {
            title: 'Descrição',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Valor',
            dataIndex: 'amount',
            key: 'amount',
        },
    ];

    const addEntry = () => {
        if (description && amount !== 0) {
            const newEntry = {
                description: description,
                amount: amount,
            };
            setEntries([...entries, newEntry]);
            setDescription('');
            setAmount(0);
        }
    };

    const getTotalBalance = () => {
        return entries.reduce((total, entry) => total + entry.amount, 0);
    };

    const data = entries.map((entry, index) => ({
        key: index,
        description: entry.description,
        amount: entry.amount,
    }));

    return (
        <div>
            <h1>Balancete Page</h1>
            <div>
                <Input
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                />
                <Button onClick={addEntry}>Adicionar Entrada</Button>
            </div>
            <div>
                <h2>Entradas</h2>
                <Table columns={columns} dataSource={data} />
            </div>
            <div>
                <h2>Total do Balancete</h2>
                <p>{getTotalBalance()}</p>
            </div>
        </div>
    );
}

export default Balancete;
