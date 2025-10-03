# Add this to your Rails API controller that handles /api/fetch-sanity

# In your Rails controller (e.g., api_controller.rb or similar)
def fetch_sanity
  query = params[:query]
  preview = params[:preview] == true || params[:preview] == 'true'
  
  # Initialize Sanity client with preview support
  sanity_client = if preview
    Sanity::Client.new(
      project_id: ENV['SANITY_PROJECT_ID'],
      dataset: ENV['SANITY_DATASET'],
      token: ENV['SANITY_API_TOKEN'], # Required for preview/draft access
      use_cdn: false,
      api_version: '2023-01-01',
      perspective: 'previewDrafts' # This enables draft content
    )
  else
    Sanity::Client.new(
      project_id: ENV['SANITY_PROJECT_ID'],
      dataset: ENV['SANITY_DATASET'],
      use_cdn: true,
      api_version: '2023-01-01',
      perspective: 'published' # Only published content
    )
  end

  begin
    result = sanity_client.fetch(query)
    render json: { result: result, query: query, preview: preview }
  rescue => e
    Rails.logger.error "Sanity fetch error: #{e.message}"
    render json: { error: e.message }, status: 500
  end
end

# Make sure your Rails .env includes:
# SANITY_PROJECT_ID=e1m6qdbk
# SANITY_DATASET=projects  
# SANITY_API_TOKEN=your_token_with_viewer_permissions