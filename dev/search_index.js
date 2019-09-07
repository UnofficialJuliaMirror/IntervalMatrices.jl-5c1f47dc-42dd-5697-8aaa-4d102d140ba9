var documenterSearchIndex = {"docs":
[{"location":"about/#About-1","page":"About","title":"About","text":"","category":"section"},{"location":"about/#","page":"About","title":"About","text":"This page contains some general information about this project, and recommendations about contributing.","category":"page"},{"location":"about/#","page":"About","title":"About","text":"Pages = [\"about.md\"]","category":"page"},{"location":"about/#Contributing-1","page":"About","title":"Contributing","text":"","category":"section"},{"location":"about/#","page":"About","title":"About","text":"If you like this package, consider contributing! You can send bug reports (or fix them and send your code), add examples to the documentation or propose new features.","category":"page"},{"location":"about/#","page":"About","title":"About","text":"Below we detail some of the guidelines that should be followed when contributing to this package.","category":"page"},{"location":"about/#Branches-1","page":"About","title":"Branches","text":"","category":"section"},{"location":"about/#","page":"About","title":"About","text":"Each pull request (PR) should be pushed in a new branch with the name of the author followed by a descriptive name, e.g. mforets/my_feature. If the branch is associated to a previous discussion in one issue, we use the name of the issue for easier lookup, e.g. mforets/7.","category":"page"},{"location":"about/#Unit-testing-and-continuous-integration-(CI)-1","page":"About","title":"Unit testing and continuous integration (CI)","text":"","category":"section"},{"location":"about/#","page":"About","title":"About","text":"This project is synchronized with Travis CI, such that each PR gets tested before merging (and the build is automatically triggered after each new commit).","category":"page"},{"location":"about/#","page":"About","title":"About","text":"For the maintainability of this project, we try to understand and fix the failing doctests if they exist. We develop in Julia v1.0, but for experimentation we also build on the nightly branch.","category":"page"},{"location":"about/#","page":"About","title":"About","text":"To run the unit tests locally, you should do:","category":"page"},{"location":"about/#","page":"About","title":"About","text":"$ julia --color=yes test/runtests.jl","category":"page"},{"location":"about/#Contributing-to-the-documentation-1","page":"About","title":"Contributing to the documentation","text":"","category":"section"},{"location":"about/#","page":"About","title":"About","text":"This documentation is written in Markdown, and it relies on Documenter.jl to produce the HTML layout. To build the docs, run make.jl:","category":"page"},{"location":"about/#","page":"About","title":"About","text":"$ julia --color=yes docs/make.jl","category":"page"},{"location":"about/#Credits-1","page":"About","title":"Credits","text":"","category":"section"},{"location":"about/#","page":"About","title":"About","text":"These persons have contributed to IntervalMatrices.jl (in alphabetic order):","category":"page"},{"location":"about/#","page":"About","title":"About","text":"Marcelo Forets, Universidad de la República\nChristian Schilling, IST Austria","category":"page"},{"location":"lib/types/#Types-1","page":"Types","title":"Types","text":"","category":"section"},{"location":"lib/types/#","page":"Types","title":"Types","text":"This section describes systems types implemented in IntervalMatrices.jl.","category":"page"},{"location":"lib/types/#","page":"Types","title":"Types","text":"Pages = [\"types.md\"]\nDepth = 3","category":"page"},{"location":"lib/types/#","page":"Types","title":"Types","text":"CurrentModule = IntervalMatrices","category":"page"},{"location":"lib/types/#Abstract-interval-operators-1","page":"Types","title":"Abstract interval operators","text":"","category":"section"},{"location":"lib/types/#","page":"Types","title":"Types","text":"AbstractIntervalMatrix","category":"page"},{"location":"lib/types/#IntervalMatrices.AbstractIntervalMatrix","page":"Types","title":"IntervalMatrices.AbstractIntervalMatrix","text":"AbstractIntervalMatrix{IT} <: AbstractMatrix{IT}\n\nAbstract supertype for interval matrix types.\n\n\n\n\n\n","category":"type"},{"location":"lib/types/#Interval-matrix-1","page":"Types","title":"Interval matrix","text":"","category":"section"},{"location":"lib/types/#","page":"Types","title":"Types","text":"IntervalMatrix","category":"page"},{"location":"lib/types/#IntervalMatrices.IntervalMatrix","page":"Types","title":"IntervalMatrices.IntervalMatrix","text":"IntervalMatrix{T, IT<:Interval{T}, MT<:AbstractMatrix{IT}} <: AbstractIntervalMatrix{IT}\n\nAn interval matrix i.e. a matrix whose coefficients are intervals. This type is parametrized in the number field, the interval type, and the matrix type.\n\nFields\n\nmat – matrix whose entries are intervals\n\nExamples\n\njulia> A = IntervalMatrix([-0.9±0.1 0±0; 0±0 -0.9±0.1])\n2×2 IntervalMatrix{Float64,Interval{Float64},Array{Interval{Float64},2}}:\n [-1, -0.799999]   [0, 0]\n  [0, 0]          [-1, -0.799999]\n\n\n\n\n\n","category":"type"},{"location":"#IntervalMatrices.jl-1","page":"Home","title":"IntervalMatrices.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"IntervalMatrices is a Julia package to work with matrices that have uncertain parameters.","category":"page"},{"location":"#Features-1","page":"Home","title":"Features","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Here is a quick summary of the available functionality. See the section Library Outline below for details.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"An IntervalMatrix type that wraps a two-dimensional array whose components are intervals.\nArithmetic between scalars, intervals and interval matrices.\nQuadratic expansions using single-use expressions (SUE).\nInterval matrix exponential: underapproximation and overapproximation routines.\nUtility functions such as: operator norm, random sampling, splitting and containment check.","category":"page"},{"location":"#Quickstart-1","page":"Home","title":"Quickstart","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"An interval matrix is a matrix whose coefficients are intervals. For instance,","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> using IntervalMatrices\n\njulia> A = IntervalMatrix([0..1 1..2; 2..3 -4.. -2])\n2×2 IntervalMatrix{Float64,Interval{Float64},Array{Interval{Float64},2}}:\n [0, 1]    [1, 2]\n [2, 3]  [-4, -2]","category":"page"},{"location":"#","page":"Home","title":"Home","text":"defines an interval matrix A. The type of each coefficient in A is an interval, e.g. its coefficient in position (1 1) is the interval 0 1 over double-precision floating-point numbers:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> A[1, 1]\n[0, 1]\n\njulia> typeof(A[1, 1])\nInterval{Float64}","category":"page"},{"location":"#","page":"Home","title":"Home","text":"This library uses the interval arithmetic package IntervalArithmetic.jl to deal with interval computations. For instance, one can compute a multiple of A","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> 2A\n2×2 Array{Interval{Float64},2}:\n [0, 2]    [2, 4]\n [4, 6]  [-8, -4]","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Or an interval multiple of A,","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> (-1.0..1.0) * A\n2×2 IntervalMatrix{Float64,Interval{Float64},Array{Interval{Float64},2}}:\n [-1, 1]  [-2, 2]\n [-3, 3]  [-4, 4]","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Or compute the square of A,","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> A*A\n2×2 IntervalMatrix{Float64,Interval{Float64},Array{Interval{Float64},2}}:\n    [2, 7]  [-8, 0]\n [-12, -1]  [6, 22]","category":"page"},{"location":"#","page":"Home","title":"Home","text":"In these cases, the rules of interval arithmetic are used; see the wikipedia page on interval arithmetic for the relevant definitions and algebraic rules that apply.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"However, the straightforward application of the rules of interval arithmetic does not always give the exact result; in general it only gives an overapproximation [1, 2]. To illustrate, suppose that we are interested in the quadratic term At + frac12A^2 t^2, which corresponds to the Taylor-series expansion at order two of e^At - I. Then, at t = 10,","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> A + 1/2 * A^2\n2×2 Array{Interval{Float64},2}:\n  [1, 4.5]  [-3, 2]\n [-4, 2.5]  [-1, 9]","category":"page"},{"location":"#","page":"Home","title":"Home","text":"This computation can be performed exactly via single-use expressions implemented in IntervalMatrices.jl, obtaining an interval matrix that is strictly included in the previous result:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> quadratic_expansion(A, 1.0)\n2×2 Array{Interval{Float64},2}:\n  [1, 4.5]  [-2, 1]\n [-3, 1.5]   [1, 7]","category":"page"},{"location":"#","page":"Home","title":"Home","text":"An overapproximation and an underapproximation method at a given order for e^At, where A is an interval matrix, are also available. See the Methods section for details.","category":"page"},{"location":"#Library-Outline-1","page":"Home","title":"Library Outline","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Explore the types and methods defined in this library by following the links below, or use the search bar in the left to look for a specific keyword in the documentation.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\n    \"lib/types.md\",\n    \"lib/methods.md\"\n]\nDepth = 2","category":"page"},{"location":"#References-1","page":"Home","title":"References","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"[1] Althoff, Matthias, Olaf Stursberg, and Martin Buss. Reachability analysis of nonlinear systems     with uncertain parameters using conservative linearization.     2008 47th IEEE Conference on Decision and Control. IEEE, 2008.\n[2] Kosheleva, Olga, et al. Computing the cube of an interval matrix is NP-hard.     Proceedings of the 2005 ACM symposium on Applied computing. ACM, 2005.","category":"page"},{"location":"lib/methods/#Methods-1","page":"Methods","title":"Methods","text":"","category":"section"},{"location":"lib/methods/#","page":"Methods","title":"Methods","text":"This section describes systems methods implemented in IntervalMatrices.jl.","category":"page"},{"location":"lib/methods/#","page":"Methods","title":"Methods","text":"Pages = [\"methods.md\"]\nDepth = 3","category":"page"},{"location":"lib/methods/#","page":"Methods","title":"Methods","text":"CurrentModule = IntervalMatrices","category":"page"},{"location":"lib/methods/#","page":"Methods","title":"Methods","text":"opnorm\ninf\nsup\nquadratic_expansion\nexpm_overapproximation\nexpm_underapproximation\nrand\nsample\nsplit\n∈","category":"page"},{"location":"lib/methods/#LinearAlgebra.opnorm","page":"Methods","title":"LinearAlgebra.opnorm","text":"opnorm(A::IntervalMatrix, p::Real=Inf)\n\nThe matrix norm of an interval matrix.\n\nInput\n\nA – interval matrix\np – (optional, default: Inf) the class of p-norm\n\nNotes\n\nThe matrix p-norm of an interval matrix A is defined as\n\n    A_p = max(textinf(A) textsup(A))_p\n\nwhere max and  are taken elementwise.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#IntervalArithmetic.inf","page":"Methods","title":"IntervalArithmetic.inf","text":"inf(A::IntervalMatrix{T}) where {T}\n\nReturn the infimum of this interval matrix, which corresponds to taking the element-wise infimum of A.\n\nInput\n\nA – interval matrix\n\nOutput\n\nA scalar matrix whose coefficients are the infima of each element in A.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#IntervalArithmetic.sup","page":"Methods","title":"IntervalArithmetic.sup","text":"sup(A::IntervalMatrix{T}) where {T}\n\nReturn the supremum of this interval matrix, which corresponds to taking the element-wise supremum of A.\n\nInput\n\nA – interval matrix\n\nOutput\n\nA scalar matrix whose coefficients are the suprema of each element in A.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#IntervalMatrices.quadratic_expansion","page":"Methods","title":"IntervalMatrices.quadratic_expansion","text":"quadratic_expansion(A::IntervalMatrix, t)\n\nExactly compute the quadratic formula At + frac12A^2t^2 using interval arithmetics.\n\nInput\n\nA – interval matrix\nt – non-negative time value\n\nAlgorithm\n\nSee Lemma 1 in Reachability Analysis of Linear Systems with Uncertain Parameters and Inputs by M. Althoff, O. Stursberg, M. Buss.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#IntervalMatrices.expm_overapproximation","page":"Methods","title":"IntervalMatrices.expm_overapproximation","text":"expm_overapproximation(M::IntervalMatrix{T, Interval{T}}, t, p) where {T}\n\nOverapproximation of the exponential of an interval matrix.\n\nInput\n\nA – interval matrix\nt – non-negative time value\np – order of the approximation\n\nAlgorithm\n\nSee Theorem 1 in Reachability Analysis of Linear Systems with Uncertain Parameters and Inputs by M. Althoff, O. Stursberg, M. Buss.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#IntervalMatrices.expm_underapproximation","page":"Methods","title":"IntervalMatrices.expm_underapproximation","text":"expm_underapproximation(M::IntervalMatrix{T, Interval{T}}, t, p) where {T}\n\nOverapproximation of the exponential of an interval matrix.\n\nInput\n\nA – interval matrix\nt – non-negative time value\np – order of the approximation\n\nAlgorithm\n\nSee Theorem 2 in Reachability Analysis of Linear Systems with Uncertain Parameters and Inputs by M. Althoff, O. Stursberg, M. Buss.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#Base.rand","page":"Methods","title":"Base.rand","text":"rand(::Type{IntervalMatrix}, m::Int=2, n::Int=2;\n     N=Float64, rng::AbstractRNG=GLOBAL_RNG)\n\nReturn a random interval matrix of the given size and numeric type.\n\nInput\n\nIntervalMatrix – type, used for dispatch\nm              – (optional, default: 2) number of rows\nn              – (optional, default: 2) number of columns\nrng            – (optional, default: GLOBAL_RNG) random-number generator\n\nOutput\n\nAn interval matrix of size m  n whose coefficients are normally-distributed intervals of type N with mean 0 and standard deviation 1.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#IntervalMatrices.sample","page":"Methods","title":"IntervalMatrices.sample","text":"sample(A::IntervalMatrix{T}; rng::AbstractRNG=GLOBAL_RNG) where {T}\n\nReturn a sample of the given random interval matrix.\n\nInput\n\nA   – interval matrix\nm   – (optional, default: 2) number of rows\nn   – (optional, default: 2) number of columns\nrng – (optional, default: GLOBAL_RNG) random-number generator\n\nOutput\n\nAn interval matrix of size m  n whose coefficients are normally-distributed intervals of type N with mean 0 and standard deviation 1.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#Base.split","page":"Methods","title":"Base.split","text":"split(A::IntervalMatrix{T}) where {T}\n\nSplit an interval matrix A into two scalar matrices C and S such that A = C + -S S.\n\nInput\n\nA – interval matrix\n\nOutput\n\nA pair (C, S) such that the entries of C are the central points and the entries of S are the (nonnegative) radii of the intervals in A.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#Base.:∈","page":"Methods","title":"Base.:∈","text":"∈(M::AbstractMatrix, A::AbstractIntervalMatrix)\n\nCheck whether a concrete matrix is an instance of an interval matrix.\n\nInput\n\nM – concrete matrix\nA – interval matrix\n\nOutput\n\ntrue iff M is an instance of A\n\nAlgorithm\n\nWe check for each entry in M whether it belongs to the corresponding interval in A.\n\n\n\n\n\n","category":"function"},{"location":"lib/methods/#Hulls-1","page":"Methods","title":"Hulls","text":"","category":"section"},{"location":"lib/methods/#","page":"Methods","title":"Methods","text":"correction_hull","category":"page"},{"location":"lib/methods/#IntervalMatrices.correction_hull","page":"Methods","title":"IntervalMatrices.correction_hull","text":"correction_hull(A::IntervalMatrix{T}, t, p) where {T}\n\nCompute the correction term for the convex hull of a point and its linear map with an interval matrix in order to contain all trajectories of a linear system.\n\nInput\n\nA – interval matrix\nt – non-negative time value\np – order of the approximation\n\nOutput\n\nAn interval matrix representing the correction term.\n\nAlgorithm\n\nSee Theorem 3 in [1].\n\n[1] M. Althoff, O. Stursberg, M. Buss. Reachability Analysis of Linear Systems with Uncertain Parameters and Inputs. CDC 2007.\n\n\n\n\n\n","category":"function"}]
}
