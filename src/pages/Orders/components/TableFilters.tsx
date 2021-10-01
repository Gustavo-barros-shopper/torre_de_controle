import React, { useEffect } from "react";
import FlexLayout from "../../../components/layout/FlexLayout";
import ReactSelect from "react-select";
import { useForm, Controller, SubmitHandler, NestedValue } from "react-hook-form";
import * as yup from "yup";
import { OrderFilters } from "../OrderTypes";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    orderCodes: yup.array().of(yup.string()).optional(),
    deliveryDate: yup.string().required(),
    store: yup.number().required(),
  }).required();

export default () => {

    const { register, handleSubmit, formState: { errors }, control } = useForm<OrderFilters>({
        resolver: yupResolver(schema)
      });

    const onSubmit = (data: OrderFilters) => console.log(data);

    return (
        <FlexLayout>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FlexLayout direction='horizontal'>
                    <FlexLayout>
                        <label>Data de Entrega</label>
                        <input {...register('deliveryDate')} type='date' name='deliveryDate' id='deliveryDate' />
                        <p>{errors.deliveryDate?.message}</p>
                    </FlexLayout>

                    <FlexLayout>
                        <label htmlFor="store">Loja:</label><br />
                        <Controller
                            name="store"                            
                            control={control}
                            render={({ field }) => 
                                <ReactSelect 
                                    {...field}
                                    options={[]}
                                    isClearable={true}
                                    isSearchable={false}
                                    name="store"
                                    placeholder={"Selecione uma Loja"}
                                />
                            }
                        />
                        <p>{errors.store?.message}</p>
                    </FlexLayout>
                </FlexLayout>
            </form>
        </FlexLayout>
    )
}