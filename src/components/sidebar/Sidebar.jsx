import React from 'react';
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto px-0">
                <div id="sidebar" className="collapse collapse-horizontal show border-end">
                    <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100">
                        <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><i className="bi bi-bootstrap"></i> <span>Item</span> </a>
                    </div>
                </div>
            </div>
            <main className="col ps-md-2 pt-2">
                <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-1 text-decoration-none"><i className="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
                <div className="page-header pt-3">
                    <h2>Bootstrap 5 Sidebar Menu - Simple</h2>
                </div>
                <p className="lead">A offcanvas "push" vertical nav menu example.</p>
                <hr />
                <div className="row">
                    <div className="col-12">
                        <p>This is a simple collapsing sidebar menu for Bootstrap 5. Unlike the Offcanvas component that overlays the content, this sidebar will "push" the content. Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag.</p>
                    </div>
                </div>
            </main>
        </div>
      </div>
    </div>
  );
}

export default Sidebar