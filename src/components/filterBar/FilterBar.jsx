import React, { useState } from 'react'
import './FilterBar.css'
import { Form } from 'react-bootstrap'

const FilterBar = () => {
    const [showFilter, setShowFilter] = useState(false)
    return (
        <>
            <div className='filterContainer'>
                <i className="bi bi-filter" onClick={() => setShowFilter(!showFilter)} />
            </div>
            {showFilter &&
                <Form className='filterChecks'>
                    <div>
                        <h3>Consola</h3>
                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PC`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PS4`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PS5`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`XBOX`}
                        />

                    </div>

                    <div>
                        <h3>GÉNERO</h3>
                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PC`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PS4`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PS5`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`XBOX`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PC`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PS4`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PS5`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`XBOX`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PC`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PS4`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PS5`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`XBOX`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PC`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PS4`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`PS5`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`XBOX`}
                        />

                        <Form.Check // prettier-ignore
                            type={'checkbox'}
                            id={`default-`}
                            label={`XBOX`}
                        />


                    </div>


                </Form>}
        </>
    )
}

export default FilterBar