import React, {Component} from 'react';

class AddProject extends Component {
    render() {
        return (
            <div>
                {
                //check name attribute input fields
                //create constructor
                //
                }
                <div className="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Create / Edit Project form</h5>
                                <hr/>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg "
                                               placeholder="Project Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg"
                                               placeholder="Unique Project ID"
                                               disabled/>
                                    </div>
                                    <div className="form-group">
                                    <textarea className="form-control form-control-lg"
                                              placeholder="Project Description"></textarea>
                                    </div>
                                    <h6>Start Date</h6>
                                    <div className="form-group">
                                        <input type="date" className="form-control form-control-lg" name="start_date"/>
                                    </div>
                                    <h6>Estimated End Date</h6>
                                    <div className="form-group">
                                        <input type="date" className="form-control form-control-lg" name="end_date"/>
                                    </div>

                                    <input type="submit" className="btn btn-primary btn-block mt-4"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProject;