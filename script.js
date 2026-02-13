document.documentElement.classList.add('js');

const revealItems = document.querySelectorAll('.reveal');

const showImmediately = () => revealItems.forEach((el) => el.classList.add('visible'));

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  showImmediately();
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -24px 0px' }
  );

  revealItems.forEach((item) => observer.observe(item));
}

const toggles = document.querySelectorAll('[data-toggle]');
toggles.forEach((button) => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.toggle);
    if (target) target.classList.toggle('hidden');
  });
});

const BLOG_STORAGE_KEY = 'visrodeck.blogPosts';
const UPDATES_STORAGE_KEY = 'visrodeck.updates';

const safeGet = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch {
    return [];
  }
};

const safeSet = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // no-op when storage is unavailable
  }
};

const blogList = document.getElementById('blog-list');
const blogForm = document.getElementById('blog-form');

const formatDate = (rawDate) => {
  const d = new Date(rawDate);
  if (Number.isNaN(d.getTime())) return rawDate;
  return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
};

const renderBlogPostCard = (post) => {
  const article = document.createElement('article');
  article.className = 'card post-card';
  article.innerHTML = `
    <p class="blog-meta">${formatDate(post.date)}</p>
    <h3><a href="blog-post.html">${post.title}</a></h3>
    <p>${post.excerpt}</p>
  `;
  blogList?.prepend(article);
};

if (blogList) {
  safeGet(BLOG_STORAGE_KEY).forEach((post) => renderBlogPostCard(post));
}

if (blogForm) {
  blogForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(blogForm);
    const newPost = {
      title: formData.get('title')?.toString().trim(),
      date: formData.get('date')?.toString(),
      excerpt: formData.get('excerpt')?.toString().trim(),
      body: formData.get('body')?.toString().trim()
    };

    if (!newPost.title || !newPost.date || !newPost.excerpt) return;

    const storedPosts = safeGet(BLOG_STORAGE_KEY);
    storedPosts.unshift(newPost);
    safeSet(BLOG_STORAGE_KEY, storedPosts);

    renderBlogPostCard(newPost);
    blogForm.reset();
  });
}

const updatesList = document.getElementById('updates-list');
const updateForm = document.getElementById('update-form');

const renderUpdateCard = (update) => {
  const article = document.createElement('article');
  article.className = 'card release';
  const changes = update.changes.map((item) => `<li>${item}</li>`).join('');
  article.innerHTML = `
    <p class="meta">${update.version} · ${formatDate(update.date)}</p>
    <h3>${update.version}</h3>
    <ul>${changes}</ul>
  `;
  updatesList?.prepend(article);
};

if (updatesList) {
  safeGet(UPDATES_STORAGE_KEY).forEach((update) => renderUpdateCard(update));
}

if (updateForm) {
  updateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(updateForm);
    const rawChanges = formData.get('changes')?.toString().trim() || '';
    const update = {
      version: formData.get('version')?.toString().trim(),
      date: formData.get('date')?.toString(),
      changes: rawChanges.split('\n').map((line) => line.trim()).filter(Boolean)
    };

    if (!update.version || !update.date || !update.changes.length) return;

    const storedUpdates = safeGet(UPDATES_STORAGE_KEY);
    storedUpdates.unshift(update);
    safeSet(UPDATES_STORAGE_KEY, storedUpdates);

    renderUpdateCard(update);
    updateForm.reset();
  });
}

const janeDownloadButton = document.getElementById('download-jane');
if (janeDownloadButton) {
  janeDownloadButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.alert('Jane Alpha is releasing soon. Download links will be enabled at launch.');
  });
}
