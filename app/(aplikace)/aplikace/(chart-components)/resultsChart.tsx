import {
    VictoryAxis,
    VictoryBar,
    VictoryChart,
    VictoryGroup, VictoryLegend,
    VictoryLine,
    VictoryTheme,
    VictoryTooltip,
    VictoryVoronoiContainer
} from 'victory';
export interface dataPoint {
    x:number,
    y:number,
    sub: boolean,
    date: string
}
export interface dataPointsSet{
    math:Array<dataPoint>,
    cj:Array<dataPoint>
}
interface graphData{
    x:number,
    y:number,
}
export default function ResultsChart({results}:{results:dataPointsSet}){
    function formatDate(datetime: string): string {
        datetime.replace(" ","")
        try {
            const date = new Date(datetime);
            const day = date.getDate();
            const month = date.getMonth() + 1; // Months are zero-based
            const year = date.getFullYear();

            return `${day}. ${month}. ${year}`;
        } catch (error) {
            console.error("Invalid datetime string", error);
            return "";
        }
    }
    const cjData:Array<graphData> = results.cj?.map((dataPoint) => ({
     x:dataPoint.x,
     y:dataPoint.y,
    })) || undefined
    const mathData:Array<graphData> = results.math?.map((dataPoint) => ({
        x:dataPoint.x,
        y:dataPoint.y,
    })) || undefined;

    let maxX: number | undefined; // Declare maxCj outside the if statement
    if (cjData && cjData.length > 0) {
        maxX = cjData[cjData.length - 1].x+1;
    } else {
        maxX = 6
    }


    return(

        <div className="h-60 bg-gray-50 max-w-xl rounded-lg">
            <VictoryChart height={200} width={500}>
                <VictoryLegend x={400} y={0}
                               orientation="vertical"
                               gutter={10}
                               data={[
                                   { name: "český jazyk", symbol: { fill: "orange", type: "square" } },
                                   { name: "matemtaika", symbol: { fill: "teal", type:"square" } },
                               ]}
                />
                <VictoryAxis dependentAxis/>
                <VictoryGroup offset={15}
                              colorScale={["orange","teal"]}
                >

                <VictoryBar
                    data={cjData}
                    style={{
                        data: {
                            width: 15
                        }
                    }}
                    domain={{y: [0, 50], x: [1,maxX]}}
                    labels={({ datum }) => `${datum.y}`}
                />
                <VictoryBar
                    data={mathData}
                    style={{
                        data: {
                            width: 15
                        }
                    }}
                    domain={{y: [0, 50], x: [1,maxX]}}
                    labels={({ datum }) => `${datum.y}`}
                />

                </VictoryGroup>
                <VictoryAxis tickFormat={(tick) => ``}/>
            </VictoryChart>
        </div>
    )
}