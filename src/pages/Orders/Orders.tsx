import React, { useEffect, useRef, useState } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import TableFilters from './components/TableFilters';
import { Order } from './OrderTypes';

var aux : Array<Order> = [
    {
        id: 1,
        orderNumber: '15812409184',
        deliveryDate: '31/08/2021',
        creationDate: '28/08/2021 16:05:25',
        orderType: 'Expresso',
        orderStore: 'Mensal',
        orderStatus: 'Confirmado',
        invoiceIncluded: 'Sim',
        invoiceScripted: 'Sim',
        orderPrinted: 'Sim',
        picking: 'Sim',
        check: 'Sim',
        orderFisinhed: 'Sim',
        missingIncluded: 'Sim',
        isChecked: false,
        select: null
    },
    {
        id: 2,
        orderNumber: '15812409185',
        deliveryDate: '31/08/2021',
        creationDate: '28/08/2021 16:05:25',
        orderType: 'Expresso',
        orderStore: 'Mensal',
        orderStatus: 'Confirmado',
        invoiceIncluded: 'Sim',
        invoiceScripted: 'Sim',
        orderPrinted: 'Sim',
        picking: 'Sim',
        check: 'Sim',
        orderFisinhed: 'Sim',
        missingIncluded: 'Sim',
        isChecked: false,
        select: null
    },
    {
        id: 3,
        orderNumber: '15812409186',
        deliveryDate: '31/08/2021',
        creationDate: '28/08/2021 16:05:25',
        orderType: 'Expresso',
        orderStore: 'Mensal',
        orderStatus: 'Confirmado',
        invoiceIncluded: 'Sim',
        invoiceScripted: 'Sim',
        orderPrinted: 'Sim',
        picking: 'Sim',
        check: 'Sim',
        orderFisinhed: 'Sim',
        missingIncluded: 'Sim',
        isChecked: false,
        select: null
    },
    {
        id: 4,
        orderNumber: '15812409187',
        deliveryDate: '31/08/2021',
        creationDate: '28/08/2021 16:05:25',
        orderType: 'Expresso',
        orderStore: 'Mensal',
        orderStatus: 'Confirmado',
        invoiceIncluded: 'Sim',
        invoiceScripted: 'Sim',
        orderPrinted: 'Sim',
        picking: 'Sim',
        check: 'Sim',
        orderFisinhed: 'Sim',
        missingIncluded: 'Sim',
        isChecked: false,
        select: null
    },
    {
        id: 5,
        orderNumber: '15812409188',
        deliveryDate: '31/08/2021',
        creationDate: '28/08/2021 16:05:25',
        orderType: 'Expresso',
        orderStore: 'Mensal',
        orderStatus: 'Confirmado',
        invoiceIncluded: 'Sim',
        invoiceScripted: 'Sim',
        orderPrinted: 'Sim',
        picking: 'Sim',
        check: 'Sim',
        orderFisinhed: 'Sim',
        missingIncluded: 'Sim',
        isChecked: false,
        select: null
    },
    {
        id: 6,
        orderNumber: '15812409189',
        deliveryDate: '31/08/2021',
        creationDate: '28/08/2021 16:05:25',
        orderType: 'Expresso',
        orderStore: 'Mensal',
        orderStatus: 'Confirmado',                
        invoiceIncluded: 'Sim',
        invoiceScripted: 'Sim',
        orderPrinted: 'Sim',
        picking: 'Sim',
        check: 'Sim',
        orderFisinhed: 'Sim',
        missingIncluded: 'Sim',
        isChecked: false,
        select: null
    }
]

export default () => {

    const [checkAll, setCheckAll] = useState(false);
    const [orders, setOrders] = useState([]);
    const [dataTable, setDataTable] = useState([]);
    const ordersRef = useRef(orders)

    const updateOrders = (newState : any) => {
        ordersRef.current = newState
        setOrders(newState)
    }

    const handleClick = (orderClicked : any) => {

        let check = !orderClicked.isChecked

        let allOrders = ordersRef.current.map((order : Order) => {
            if(order.id !== orderClicked.id) return order 

            order.isChecked = check;

            order.select = <input
                                id={order.id.toString()}
                                type='checkbox'
                                className='orderCheckbox'
                                checked={check}
                                onChange={() => handleClick(order)}
                            />;
            return order
        })

        updateOrders(allOrders)
    }

    const handleSelectAll = () => {
        let allOrders = ordersRef.current.map((order : Order) => {
            order.isChecked = !checkAll;

            order.select = <input
                                id={order.id.toString()}
                                type='checkbox'
                                className='orderCheckbox'
                                checked={!checkAll}
                                onChange={() => handleClick(order)}
                            />;
            return order
        })

        updateOrders(allOrders)
        setCheckAll(!checkAll)
    }

    const searchOrder = (
        orderCodes : Array<string>,
        deliveryDate : string,
        store : number
    ) => {

    }

    useEffect(() => {
        console.log("aux: ", aux)
        
        let ordersAux = aux.map((order : Order) => {
            order.isChecked = false
            order.select = <input
                id={order.id.toString()}
                type='checkbox'
                className='orderCheckbox'
                checked={false}
                onChange={() => handleClick(order)}
            />

            return order
        })

        updateOrders(ordersAux)
    }, [])

    return (
        <>
            <TableFilters/>
            
            <ReactTable
                style={{ fontSize: "0.8em", width: "calc(100%-250px)", maxWidth: "80%", height: "90%", overflowX: "scroll" }}
                columns={[
                    {
                        Header: (
                            <input
                                type='checkbox'
                                onClick={handleSelectAll}
                                checked={checkAll}
                            />
                        ),
                        id: 'select',
                        accessor: 'select',
                        width: 50,

                    },
                    {
                        Header: 'N° Pedido',
                        id: 'orderNumber',
                        accessor: 'orderNumber',
                        width: 240,
                    },
                    {
                        Header: 'Data de Entrega',
                        id: 'deliveryDate',
                        accessor: 'deliveryDate',
                        width: 120,
                    },
                    {
                        Header: 'Data de Criação',
                        id: 'creationDate',
                        accessor: 'creationDate',
                        width: 150,
                    },
                    {
                        Header: 'Tipo',
                        id: 'orderType',
                        accessor: 'orderType',
                        width: 90,
                    },
                    {
                        Header: 'Loja',
                        id: 'orderStore',
                        accessor: 'orderStore',
                        width: 80,
                    },
                    {
                        Header: 'Status',
                        id: 'orderStatus',
                        accessor: 'orderStatus',
                        width: 100,
                    },
                    {
                        Header: 'Nota Incluida',
                        id: 'invoiceIncluded',
                        accessor: 'invoiceIncluded',
                        width: 100,
                    },
                    {
                        Header: 'Roteirizado',
                        id: 'invoiceScripted',
                        accessor: 'invoiceScripted',
                        width: 90,
                    },
                    {
                        Header: 'Impresso',
                        id: 'orderPrinted',
                        accessor: 'orderPrinted',
                        width: 80,
                    },
                    {
                        Header: 'Picking',
                        id: 'picking',
                        accessor: 'picking',
                        width: 80,
                    },
                    {
                        Header: 'Conferência',
                        id: 'check',
                        accessor: 'check',
                        width: 90,
                    },
                    {
                        Header: 'Completo',
                        id: 'orderFisinhed',
                        accessor: 'orderFisinhed',
                        width: 80,
                    },
                    {
                        Header: 'Faltantes Incluído',
                        id: 'missingIncluded',
                        accessor: 'missingIncluded',
                        width: 120,
                    }
                ]}
                data={orders}
                resolveData={data => data.map(row => row)}
                pageSize={orders.length}
                className="-striped -highlight -fineLine"
                noDataText={"Sem registros"}
                showPagination={false}
            />

            {/* <button onClick={teste}>Testa Ai</button> */}
        </>
    )
}