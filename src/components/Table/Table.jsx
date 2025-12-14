export default function Table({columns = [], data = []}){
    retunr (
        <Table className="table table-striped table-hover">
            <thead>
                <tr>
                    {colums.map((col)=>(
                        <th key={col}>{col}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.length>0?(
                    data.map((row, i)=>(
                        <tr key={i}>
                            {object.values(row).map((cell, j)=>(
                                <td key={j}>{cell}</td>
                            ))}
                        </tr>
                    ))
                ):(
                    <tr>
                        <td colSpan={columns.length} className="text-center">
                            No hay Datos
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}