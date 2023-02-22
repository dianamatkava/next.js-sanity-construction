import React from "react";



export default function Content() {
    return (
        <div className="content-body-bg-dark h-main rounded-3xl w-4/5">

            <div className="row-auto">
                <div className="grid-cols-6">
                    <table className="table-auto">
                        <thead className="thead-dark">
                        <tr><th scope="grid-cols">Table Header</th></tr>
                        </thead>

                        <tbody>
                            <tr><td><a href="/#">Table Item 1</a></td></tr>
                        </tbody>

                        <tbody>
                            <tr><td><a href="/#">Table Item 2</a></td></tr>
                        </tbody>

                        <tbody>
                            <tr><td><a href="/#">Table Item 3</a></td></tr>
                        </tbody>

                        <tbody>
                            <tr><td><a href="/#">Table Item 4</a></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}