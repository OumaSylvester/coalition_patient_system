
const NavBar = () => {
    return (    
        <nav class="navbar navbar-expand-lg  bg-white  rounded-pill ">
                <div class="row  collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="col-3">
                        <a class="navbar-brand" href="#"><img src="/assets/TestLogo.svg" alt="TestLogo"/></a>
                    </div>
                    <div class="col-6 nav-mid font-weight-bold">                        
                            <ul class="navbar-nav mr-auto">
                              <li class="nav-item p-2">
                                <a class="nav-link" href="#"><img src="assets/home.svg" class="mx-1" alt="Overview"/>Overview </a>
                              </li>
                              <li class="nav-item p-2">
                                <a class="nav-link  active rounded-pill" href="#"><img src="assets/group.svg" class="mx-1" alt="Patients"/>Patients <span class="sr-only">(current)</span></a>
                              </li>                             
                              <li class="nav-item p-2">
                                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"><img src="assets/calendar.svg" class="mx-1" alt="Schedule"/> Schedule</a>
                              </li>
                              <li class="nav-item p-2">
                                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"><img src="assets/chat_bubble.svg" class="mx-1" alt="Chat"/>Message</a>
                              </li>
                              <li class="nav-item p-2">
                                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true"><img src="assets/credit_card.svg" class="mx-1" alt="Patients"/>Transactions</a>
                              </li>
                            </ul>
                    </div>
                    <div class="col-3 navbar-nav">
                        <div class="media nav-item pr-3">
                            <img src="assets/senior-woman-doctor.png" alt="Dr. John Doe" class="mr-3"/>
                            <div class="media-body">
                              <p class="mt-1 font-weight-bold  pb-0  mb-0">Dr. Jose Simmons</p>
                              <span class="">General Practitioner</span>
                            </div>
                        </div>
                        <div class="btn-group nav-item border-left " role="group" aria-label="Basic example">
                            <a class="btn pr-0" href="#" role="button" aria-disabled="true"><img src="assets/settings.svg" alt="Settings"/></a>
                            <a class="btn" href="#"  role="button" aria-disabled="true"><img src="assets/more_vert.svg" alt="More"/></a>
                        </div>
                    </div>
                </div>        
              </nav>            
    )
};

export default NavBar;