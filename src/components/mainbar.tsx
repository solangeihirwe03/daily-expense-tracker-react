import { ReactNode } from 'react'
import { Chart, ChartSeries, ChartSeriesItem, ChartLegend, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
import '@progress/kendo-theme-default/dist/all.css';

interface BoxLayoutProps {
    children: ReactNode;
}

const Mainbar = () => {
    const foodDrinksData = [80, 120, 160, 130, 190, 110, 150];
    const billsPaymentData = [60, 100, 130, 140, 180, 90, 120];
    const entertainmentData = [40, 90, 150, 120, 160, 100, 130];
    const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    return (
        <div className=' w-[55vw] h-[80vh] my-5 '>
            <div className='flex'>
                <BoxLayout>
                    <ul className='list-disc pl-7'>
                        <li>Food & Drinks</li>
                    </ul>
                    <h2 className='p-7 font-semibold text-2xl'>FRW 321,200</h2>
                </BoxLayout>

                <BoxLayout>
                    <ul className='list-disc pl-7'>
                        <li>Bills & Payments</li>
                    </ul>
                    <h2 className='p-7 font-semibold text-2xl'>FRW 21,200</h2>
                </BoxLayout>

                <BoxLayout>
                    <ul className='list-disc pl-7'>
                        <li>Entertainments</li>
                    </ul>
                    <h2 className='p-7 font-semibold text-2xl'>FRW 32,200</h2>
                </BoxLayout>
            </div>
            <div className='bg-white h-[55vh] my-7 rounded-3xl mx-3'>
                <Chart>
                    <ChartLegend position="top" orientation="horizontal" />
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={categories} startAngle={45} />
                    </ChartCategoryAxis>
                    <ChartSeries>
                        <ChartSeriesItem
                            type="line"
                            data={foodDrinksData}
                            name="Food & Drinks"
                            color="#FFC107"
                            style='smooth'
                        />
                        <ChartSeriesItem
                            type="line"
                            data={billsPaymentData}
                            name="Bills & Payments"
                            color="#03A9F4"
                            style='smooth'
                        />
                        <ChartSeriesItem
                            type="line"
                            data={entertainmentData}
                            name="Entertainments"
                            color="#4CAF50"
                            style='smooth'
                        />
                    </ChartSeries>
                </Chart>
            </div>
        </div>
    )
}

export default Mainbar

export const BoxLayout = ({ children }: BoxLayoutProps): JSX.Element => {
    return (
        <div className='w-1/3 mx-3 h-[20vh] bg-white rounded-3xl p-7'>{children}</div>
    )
}
