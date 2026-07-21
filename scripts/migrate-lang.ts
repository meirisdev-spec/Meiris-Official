import { getCliClient } from 'sanity/cli'

async function migrate() {
  const client = getCliClient()

  console.log('Fetching documents without language...')
  
  // Fetch teamMember and post documents that don't have a language set
  const docs = await client.fetch(`*[_type in ["teamMember", "post"] && !defined(language)][0...100]`)
  
  console.log(`Found ${docs.length} documents to migrate.`)

  if (docs.length === 0) {
    console.log('Nothing to do.')
    return
  }

  const transaction = client.transaction()

  docs.forEach((doc) => {
    transaction.patch(doc._id, (p) => p.set({ language: 'en' }))
  })

  console.log('Committing transaction...')
  await transaction.commit()
  console.log('Migration complete!')
}

migrate().catch((err) => {
  console.error('Error during migration:', err)
  process.exit(1)
})
