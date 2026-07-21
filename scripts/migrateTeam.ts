import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const migrate = async () => {
  console.log('Migrating team members to Sanity...')
  
  await client.create({
    _type: 'teamMember',
    name: 'Satish Shenoy',
    role: 'Founder & MD',
    bio: 'With a rich experience of over three decades in consulting and financial services encompassing business consulting, investment banking, capital markets, M&A and financial distribution, Satish founded SIRI Electromotive to realize his dream of contributing to a greener planet through meaningful participation in the setting up of EV Charging infrastructure in India. Satish has depth of varied transaction experience in multiple sectors including, inter-alia, Technology, Infrastructure, Real Estate, Healthcare, Manufacturing and Financial Services. His experiential and intuitive understanding of India’s legal, regulatory and financial landscape provides a strong risk management orientation for SIRI. He is a proven leader, having successfully built and led strong business teams from large institutions to entrepreneurial organizations. He has previously worked at Kotak Mahindra and IL&FS in senior capacities. A NIT, Surathkal alumnus, he also has a PGDM from IIM Ahmedabad.',
    order: 1
  })

  await client.create({
    _type: 'teamMember',
    name: 'Sanath Kumar',
    role: 'Co-founder & Director – Technical',
    bio: 'Sanath brings over twenty years of hands-on expertise across multiple domains including Research, Product Design & Development, Engineering, Simulation, Testing, Certification, Manufacturing, and Intellectual Property creation. A passionate innovator, his professional journey spans the entire R&D product lifecycle and New Product Introductions (NPI) in sectors such as AC & DC EV Chargers, Power & Energy, Lighting, Metering, Solar, Real-time Location Systems (RTLS), Industrial IoT, and Automation & Control. He has spearheaded the development of comprehensive IoT solutions for diverse applications including Industrial Plant Safety, Predictive Maintenance, Anomaly Detection of Industrial Assets, Smart Street Lighting, Smart Metering (AMR/AMI), Wireless Sensor Networks (WSN) for IoT, among others. With a track record of co-inventing four patents, Sanath is committed to driving continuing innovation in SIRI. Sanath has a Bachelor of Engineering (B.E) in Electronics and Communication (E&C) from Visvesvaraya Technological University (VTU) at Nitte, Karnataka, and a PG Diploma in Embedded Systems Design & Development from UTL Technologies Ltd, Bangalore, Karnataka.',
    order: 2
  })

  console.log('Done migrating team members!')
}

migrate().catch(console.error)
