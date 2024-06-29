import datetime
import csv

# To load the collection schedule
def load_collection_schedule(file_path):
	schedule = {}
	with open(file_path, newline =' ' ) as csvfile:
		reader = csv.DictReader(csvfile)
		for row in reader:
			area = row["area"].lower()
			schedule[area] = {"general_waste" : row["General Waste"], "recyclables" : row["Recyclables"], "time" : row["Time"]}
	return schedule
# To load the guidelines for recycling
def load_guidelines(file_path):
		guidelines = {}
		with open(file_path, newline =' ') as csvfile:
			reader = csv.DictReader(csvfile)
			for row in reader:
				guidelines[row["Category"]].lower() == row["Guidelines"]
		return guidelines
# To load the FAQs
def load_faqs(file_path):
		faqs = {}
		with open(file_path, newline = ' ') as csvfile:
			reader = csv.DictReader(csvfile)
			for row in reader:
				faqs[row["Question"]].lower() == row["Answer"]
		return faqs															
# For setting reminders
def set_reminder(location, schedule):
	reminder_time = datetime.datetime.now() + datetime.timedelta(days=1) # dummy reminder
	print(f"Reminder set for {location} on {schedule[time]} for {schedule[general_waste]} and {schedule[recyclables]}")
	print("Is there anything else you need")
	user_input = input ()
	handle_user_input(user_input)	
# Handling waste collection
def waste_collection():
	print("Can you please provide your location")
	location = input().lower()
	schedule_data = load_collection_schedule("/storage/emulated/0/WasteWise/Waste_Collection_Schedule.csv")
	if location in schedule_data:
		schedule = schedule_data[location]
		print(f"The waste collection schedule for {location.capitalize()} is :")
		print("General Waste: {schedule['general_waste']}")
		print("Recyclables: {schedule['recyclables']}")
		print("Time: {schedule['time']}")
		print("Would you like a reminder? ")
		reminder = input().lower()
		if reminder.lower() in ["yes","y"]:
			set_reminder(location, schedule)
		else:
		 print("Have a nice day")	
	else:
		print("Sorry, I don't have a schedule for your location.")		
   
# Handling sorting and recycling
def guidelines_for_recycling():
    guidelines_data = load_guidelines("/storage/emulated/0/WasteWise/Chatbot_Guidelines.csv")
    print("What type of waste would you like information on? (e.g Plastic, Paper etc.)")
    waste_type = input().lower()
    if waste_type in guidelines_data:
    	print("here are the guidelines for recycling{waste_type.capitalize()} : {guidelines_data[waste_type]}")
    	print("Is there anything else you need?")
    else:
    	print("Sorry, I don't have the guidelines for that type of waste. Please try again")
    user_input = input().lower()
    handle_user_input(user_input)				
# Handling frequently asked questions
def faqs(faq_data):
    print("Please type your question about waste management or app usage.")
    question = input("You: ").lower()
    if question in faq_data:
        print(f"Here's the answer to your question: {faq_data[question]}. Is there anything else you need?")
    else:
        print("I'm sorry, I don't have an answer to that question. Here are some things I can help you with: [Recycling Centers, FAQs, Guidelines]")
    user_input = input().lower()
    if user_input in ["yes", "y"]:
        initial_interaction()
    else:
        print("Okay, have a nice day!")
        
#Handling initial interaction
def initial_interaction():
    print("Hello! How can I help you today?")
    user_input = input().lower()
    handle_user_input(user_input)
#handling user input and redirecting to appropriate features
def handle_user_input(user_input):
    if "waste collection" in user_input:
        waste_collection()
    elif "guidelines" in user_input or "sorting" in user_input:
        guidelines()
    elif "faq" in user_input or "question" in user_input:
        faq_data = load_faqs("/storage/emulated/0/WasteWise/FAQs.csv")
        faqs(faq_data)
    elif "recycling centers" in user_input:
        recycling_centers_info()
    else:
        fallback()
#handling fall back for unrecognized inputs
def fallback():
    print("I'm sorry, I didn't understand that. Here are some things I can help you with: [Recycling Centers, FAQs, Guidelines]")
    user_input = input().lower()
    handle_user_input(user_input)

def load_recycling_centers(file_path):
    recycling_centers = []
    with open(file_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            recycling_centers.append(row)
    return recycling_centers

def recycling_centers_info():
    print("Here are some recycling centers and waste aggregators information.")
    file_path = "/storage/emulated/0/WasteWise/FAQs.csv"  # Update this path if necessary
    centers = load_recycling_centers(file_path)
    for center in centers:
        print(f"LG/LCDA: {center['LG/LCDA']}, Recyclers: {center['Recyclers']}, Contact: {center['contact']}, CRC Address: {center['crc address']}")
    print("Is there anything else you need?")
    user_input = input("You: ").lower()
    handle_user_input(user_input)

def main():
    initial_interaction()

if __name__ == "__main__":
    main()
	
	