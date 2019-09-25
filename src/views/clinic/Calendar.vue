<template>
	<div class="calendar-container">
		<div class="clinic-calendar-wrapper">
			<div class="calendar-wrapper">
				<div class="calendar-header">
					<div class="header-list">
						<div>
							<div>
								<div class="dr-container">
									<img :src="'../assets/img/clinic/ico_Profile.svg'">
									<span>Dr Jimmy Yap</span>
								</div>
								<i class="fa fa-caret-down" aria-hidden="true"></i>
							</div>
							<ul class="header-dropdown-list" v-if="false">
								<li>
									<a>Dr Jimmy Yap</a>
								</li>
							</ul>
						</div>
						<div>
							<span>Weeky</span>
							<i class="fa fa-caret-down" aria-hidden="true"></i>
							<ul class="header-dropdown-list" v-if="false">
								<li>
									<a>Weekly</a>
								</li>
								<li>
									<a>Daily</a>
								</li>
								<li>
									<a>Monthly</a>
								</li>
								<li>
									<a>By Group</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="calendar-view">
						<button class="btn-today">Today</button>
						<div class="datepicker-btn">
							<button class="btn-left"><img :src="'../assets/img/ico_left arrow.svg'"></button>
							<button class="btn-date">Sep 23 – 29, 2019</button>
							<button class="btn-right"><img :src="'../assets/img/ico_right arrow.svg'"></button>
						</div>
					</div>
					<div class="header-legend">
						<div class="blue">
							<i class="fa fa-circle"></i>
							Clinic
						</div>
						<div class="green">
							<i class="fa fa-circle"></i>
							Widget
						</div>
						<div class="yellow">
							<i class="fa fa-circle"></i>
							Mednefits App
						</div>
					</div>
					<div class="header-tool">
						<div>
							<img :src="'../assets/img/ico_Settings.svg'">
							<ul class="header-dropdown-list" v-if="false">
								<li>
									<a>Providers</a>
								</li>
								<li class="provider-selector">
									<a>
										<input type="checkbox">
										<span>View as Dropdown</span>
									</a>
								</li>
								<li class="provider-selector">
									<a>
										<input type="checkbox">
										<span>View as Tabs</span>
									</a>
								</li>
								<li class="divider"></li>
							</ul>
						</div>
						<div>
							<img :src="'../assets/img/info.png'">
						</div>
					</div>
				</div>
				<div class="view-tabs-doctors-container">
					<ul>
						<li>
							<a class="active">
								<div class="dr-container">
									<img :src="'../assets/img/clinic/ico_Profile.svg'">
									<span>Dr Jimmy Yap</span>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
	
			<FullCalendar :defaultView="calendarView"
				ref="fullCalendar" 
				:plugins="calendarPlugins" 
				:weekends="false" 
				:header = false
				:events="[
					{ title: 'event 1', date: '2019-09-09' },
					{ title: 'event 2', date: '2019-09-09' }
				]"
			/>
			<!-- 
				:header="{
					right: 'today prev,next',
					center: 'title',
					left: 'dayGridMonth,timeGridWeek,timeGridDay'
      	}"
			 -->
		</div>
		
		<div class="calendar-modal">
			<Modal v-if="false" class="appointment-modal">
        <div slot="header" class="appointment-header-container">
          <h4>Appointment</h4>
          <h4 v-if="false">Reserve Booking</h4>
          <i class="fa fa-times"></i>
        </div>
        <div slot="body" class="appointment-body-container">
         	<ul>
         		<li>
         			<a>BOOKING</a>
         		</li>
         		<li>
         			<a>PATIENT</a>
         		</li>
         	</ul>
         	<form>
         		<div class="modal-calendar-row-input-container">
         			<label>Doctor</label>
         			<div class="modal-calendar-input-wrapper">
         				<div class="modal-calendar-input-container">
         					<i class="fa fa-check"></i>
         					<span class="doctor-selection">Dr Jimmy Yap</span>
         					<i class="fa fa-chevron-down"></i>
         				</div>
         				<ul class="dropdown-container">
         					<li>
         						<a>
	         						<div class="dr-container">
												<img :src="'../assets/img/clinic/ico_Profile.svg'">
												<span>Dr Jimmy Yap</span>
											</div>
         						</a>
         					</li>
         				</ul>
         			</div>
         		</div>
         		<div class="modal-calendar-row-input-container">
         			<label>Service</label>
         			<div class="modal-calendar-input-wrapper">
         				<div class="modal-calendar-input-container">
         					<i v-if="false" class="fa fa-check"></i>
         					<i class="fa fa-arrow-right"></i>
         					<span>Select a service</span>
         					<i class="fa fa-chevron-down"></i>
         				</div>
         			</div>
         		</div>

         		<!-- Select a service -->
         		<div v-if="false" class="duration-form-container">
         			<div class="modal-calendar-row-input-container">
	         			<label>Duration</label>
	         			<div class="modal-calendar-input-wrapper">
	         				<div class="duration-container modal-calendar-input-container">
	         					<span>60</span>
	         				</div>
	         				<div class="mins-container modal-calendar-input-container">
	         					<span>Mins</span>
	         					<i class="fa fa-chevron-down"></i>
	         				</div>
	         			</div>
	         		</div>

	         		<div class="day-time-container">
		         		<div class="modal-calendar-row-input-container">
		         			<label>Day</label>
		         			<div class="modal-calendar-input-wrapper">
		         				<div class="modal-calendar-input-container">
		         					<span>Saturday, September 21 2019</span>
		         				</div>
		         			</div>
		         		</div>

		         		<div class="modal-calendar-row-input-container">
		         			<label>Time</label>
		         			<div class="modal-calendar-input-wrapper">
		         				<div class="modal-calendar-input-container">
		         					<span>1:00 PM</span>
		         					<i class="fa fa-chevron-down"></i>
		         				</div>
		         			</div>
		         		</div>
	         		</div>

         		</div>

         		<!-- Reserve booking -->

         		<div class="reserve-booking-form-container">

         			<!-- when selecting service -->
         			<div class="price-container">

	         			<div class="modal-calendar-row-input-container">
		         			<label>Price</label>
		         			<div class="modal-calendar-input-wrapper">
		         				<input class="modal-calendar-input-container">
		         			</div>
		         		</div>
         				
         				<div class="modal-calendar-row-input-container">
		         			<label>Duration</label>
		         			<div class="modal-calendar-input-wrapper">
		         				<div class="duration-container modal-calendar-input-container">
		         					<span>60</span>
		         				</div>
		         				<div class="mins-container modal-calendar-input-container">
		         					<span>Mins</span>
		         					<i class="fa fa-chevron-down"></i>
		         				</div>
		         			</div>
		         		</div>
         			</div>

       			 	<div class="day-time-container">
		         		<div class="modal-calendar-row-input-container">
		         			<label>Day</label>
		         			<div class="modal-calendar-input-wrapper">
		         				<div class="modal-calendar-input-container">
		         					<span>Saturday, September 21 2019</span>
		         				</div>
		         			</div>
		         		</div>

		         		<div class="modal-calendar-row-input-container">
		         			<label>Time</label>
		         			<div class="modal-calendar-input-wrapper">
		         				<div class="modal-calendar-input-container">
		         					<span>1:00 PM</span>
		         					<i class="fa fa-chevron-down"></i>
		         				</div>
		         			</div>
		         		</div>
	         		</div>
         			
	         		<div class="modal-calendar-row-input-container">
	         			<label>Name</label>
	         			<div class="modal-calendar-input-wrapper">
	         				<input class="modal-calendar-input-container" placeholder="Name">
	         			</div>
	         		</div>

	         		<div class="modal-calendar-row-input-container">
	         			<label>Email <span>(Optional)</span></label>
	         			<div class="modal-calendar-input-wrapper">
	         				<input class="modal-calendar-input-container" placeholder="Email">
	         			</div>
	         		</div>
	         	

	         		<div class="modal-calendar-row-input-container">
	         			<label>Phone <span>(Optional)</span></label>
	         			<div class="modal-calendar-input-wrapper area-code-container">
	         				<button>+65</button>
	         				<input class="modal-calendar-input-container" placeholder="Mobile Number">
	         			</div>
	         		</div>

         		</div>

         		<div class="modal-calendar-row-input-container">
         			<label>Notes</label>
         			<div class="modal-calendar-input-wrapper">
         				<div class="modal-calendar-input-container">
         					<span>Notes / Instructions</span>
         				</div>
         			</div>
         		</div>

         		<div class="modal-calendar-row-input-container">
         			<label></label>
         			<div class="modal-calendar-input-wrapper">
         				<button class="btn-continue">Continue</button>
         				<button v-if="false" class="btn-continue">Reserve</button>
         			</div>
         		</div>

         	</form>
        </div>
	    </Modal>

	    <Modal v-if="false" class="clinic-config-modal">
	    	<div slot="header">
	    		<div class="setup-uncompleted-line"></div>
	    		<ul>
	    			<li>
	    				<label>Welcome</label>
	    				<a>
		    				<span class="clinic-badge">
		    				1
		    				<i class="clinic-check-icon"></i>
		    				</span>
	    				</a>
	    			</li>
	    			<li>
	    				<label>Hours</label>
	    				<a>
		    				<span class="clinic-badge">
		    				2
		    				<i class="clinic-check-icon"></i>
		    				</span>
	    				</a>
	    			</li>
	    			<li>
	    				<label>Doctors</label>
	    				<a>
		    				<span class="clinic-badge">
		    				3
		    				<i class="clinic-check-icon"></i>
		    				</span>
	    				</a>
	    			</li>
	    			<li>
	    				<label>Service</label>
	    				<a>
		    				<span class="clinic-badge">
		    				4
		    				<i class="clinic-check-icon"></i>
		    				</span>
	    				</a>
	    			</li>
	    			<li>
	    				<label>DONE!</label>
	    				<a>
		    				<span class="clinic-badge">
		    				5
		    				<i class="clinic-check-icon"></i>
		    				</span>
	    				</a>
	    			</li>
	    		</ul>
	    	</div>
	    	<div slot="body">
	    		<div v-if="false" class="first-step">
		    		<div class="panel-header">
		    			<div>
		    				<h3>Welcome to Medicloud</h3>
		    				<span>We'll get you setup in no time</span>
		    			</div>
		    			<div>
		    				<button>Next <i class="fa fa-chevron-right"></i></button>
		    			</div>
		    		</div>
		    		<div class="panel-body">
		    			<span>This will only take a moment</span>
		    			<div>
		    				<div class="modal-calendar-row-input-container">
		         			<label>Clinic Name</label>
		         			<div class="modal-calendar-input-wrapper area-code-container">
		         				<input class="modal-calendar-input-container" placeholder="">
		         			</div>
		         		</div>
		    				<div class="modal-calendar-row-input-container">
		         			<label>Speciality</label>
		         			<div class="modal-calendar-input-wrapper area-code-container">
		         				<input class="modal-calendar-input-container" placeholder="">
		         				<i class="fa fa-chevron-down"></i>
		         			</div>
		         		</div>
		    				<div class="modal-calendar-row-input-container">
		         			<label>Phone No</label>
		         			<div class="modal-calendar-input-wrapper area-code-container">
		         				<button>+65</button>
		         				<input class="modal-calendar-input-container" placeholder="">
		         			</div>
		         		</div>
		    			</div>
		    		</div>
	    		</div>
	    		<div v-if="false" class="second-step">
	    			<div class="panel-header">
	    				<div>
	    					<h3>Set Yours Business Hours</h3>
		    				<span>Let your customers know when you're open</span>
	    				</div>
	    				<div>
		    				<button class="btn-prev"><i class="fa fa-chevron-left"></i></button>
		    				<button>Next <i class="fa fa-chevron-right"></i></button>
	    				</div>
	    			</div>
	    			<div class="panel-body">
	    				<span>
	    					Your time Zone is set to <u style="cursor: pointer;">SINGAPORE (UTC+08:00)</u>.
	    				</span>
	    				<div class="working-row-container">
	    					<div class="day-container">
	    						<span>Monday</span>
	    					</div>
	    					<label class="clinic-switch-container">
	    						<input type="checkbox" checked="checked">
	    						<span class="slider">
	    							<span class="off">On</span>
	    							<span class="on">Off</span>
	    						</span>
	    					</label>
	    					<div class="timepicker-container">
	    						<div>
	    							<select>
	    								<option>12:00AM</option>
	    								<option>12:00AM</option>
	    							</select>
	    						</div>
	    						<span>to</span>
	    						<div>
	    							<select>
	    								<option>12:00AM</option>
	    								<option>12:00AM</option>
	    							</select>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    		<div v-if="false" class="third-step">
	    			<div class="panel-header">
	    				<div>
	    					<h3>Add Doctors</h3>
		    				<span>Dont worry - you can always edit these later</span>
	    				</div>
	    				<div>
		    				<button class="btn-prev"><i class="fa fa-chevron-left"></i></button>
		    				<button>Next <i class="fa fa-chevron-right"></i></button>
	    				</div>
	    			</div>
	    			<div class="panel-body">
	    				
    					<div class="add-doctors-info-container">
    						<div class="add-doctors-list">
    							<div>
    								<img :src="'../assets/img/clinic/ico_Profile.svg'">
    							</div>
    							<div>
    								<span>Odin</span>
    							</div>
    							<div>
    								<span>odil@gmail.com</span>
    							</div>
    							<div>
    								<i class="fa fa-times"></i>
    							</div>
    						</div>
    					</div>
    					<div class="add-doctors-input-container">
    						<div>
    							<img :src="'../assets/img/clinic/ico_Profile.svg'">
    						</div>
    						<div>
	    						<div class="modal-calendar-input-wrapper">
	    							<input class="modal-calendar-input-container" type="text" placeholder="Name">
	    						</div>
	    						<div class="modal-calendar-input-wrapper">
	    							<input class="modal-calendar-input-container" type="text" placeholder="Email">
	    						</div>
    						</div>
    						<div>
    							<button class="btn-add">Add</button>
    						</div>
    					</div>
	    				
	    			</div>
	    		</div>
	    		<div v-if="true" class="fourth-step">
	    			<div class="panel-header">
	    				<div>
	    					<h3>Add the Services You Offer</h3>
		    				<span>Dont worry - you'll be able to edit these later</span>
	    				</div>
	    				<div>
		    				<button class="btn-prev"><i class="fa fa-chevron-left"></i></button>
		    				<button>Next <i class="fa fa-chevron-right"></i></button>
	    				</div>
	    			</div>
	    			<div class="panel-body">
	    				<div class="service-info-container">
	    					<div class="service-header">
	    						<div>
	    							<span>Service Name</span>
	    						</div>
	    						<div>
	    							<span>Time</span>
	    						</div>
	    						<div>
	    							<span>Price</span>
	    						</div>
	    						<div>
	    							<span>Doctors</span>
	    						</div>
	    					</div>
	    					<div class="service-info-list">
	    						<div>
	    							<span>Noel</span>
	    						</div>
	    						<div>
	    							<span>1 </span>
	    							<span>mins</span>
	    						</div>
	    						<div>
	    							<span>1</span>
	    						</div>
	    						<div>
	    							<i class="fa fa-user-md"> </i>
	    							<span>1</span>
	    						</div>
	    						<div>
	    							<i class="fa fa-times"></i>
	    						</div>
	    					</div>
	    				</div>
	    				<div class="service-input-container">
	    					<div>
	    						<div class="modal-calendar-input-wrapper">
	    							<input class="modal-calendar-input-container" type="text" placeholder="Service Name">
	    						</div>
	    						<div class="time-container">
	    							<div class="modal-calendar-input-wrapper">
	    								<input class="modal-calendar-input-container" type="text" placeholder="0">
	    							</div>
	    							<div>
	    								<button class="btn-mins">Mins</button>
	    							</div>
	    						</div>
	    						<div class="modal-calendar-input-wrapper">
	    							<input class="modal-calendar-input-container" type="text" placeholder="$ 0">
	    						</div>
	    						<div>
	    							<button class="btn-select-doctor">
	    								<i class="fa fa-user-md"> </i>
	    								<i class="fa fa-caret-down" ></i>
	    							</button>
	    						</div>
	    						<div>
	    							<button class="btn-add">Add</button>
	    						</div>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    		<div v-if="false" class="fifth-step">
	    			<div class="panel-header">
	    				<div>
	    					<h3>Welcome to Medicloud</h3>
		    				<span>We'll get you setup in no time</span>
	    				</div>
	    			</div>
	    			<div class="panel-body">
	    				
	    			</div>
	    		</div>
	    	</div>
	    </Modal>
		</div>

	</div>
</template>

<script>
import calendar from "@/components/clinic/calendar";
export default calendar;
</script>