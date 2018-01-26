// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var commonpack = commonpack || {};

/**
 * @const
 * @namespace
 */
var momentspack = momentspack || {};

/**
 * @constructor
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {momentspack.T_MOMENTS_ARTICLE_ADD_RQ}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {momentspack.T_MOMENTS_ARTICLE_ADD_RQ=} obj
 * @returns {momentspack.T_MOMENTS_ARTICLE_ADD_RQ}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.getRootAsT_MOMENTS_ARTICLE_ADD_RQ = function(bb, obj) {
  return (obj || new momentspack.T_MOMENTS_ARTICLE_ADD_RQ).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RQ_HEAD=} obj
 * @returns {commonpack.S_RQ_HEAD}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.prototype.sRqHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RQ_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.prototype.articleId = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.prototype.userId = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.prototype.userNickname = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.prototype.title = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.prototype.contentType = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.prototype.content = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.prototype.privType = function() {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.prototype.whiteList = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.prototype.blackList = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.startT_MOMENTS_ARTICLE_ADD_RQ = function(builder) {
  builder.startObject(10);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRqHeadOffset
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.addSRqHead = function(builder, sRqHeadOffset) {
  builder.addFieldStruct(0, sRqHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} articleId
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.addArticleId = function(builder, articleId) {
  builder.addFieldInt64(1, articleId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} userId
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.addUserId = function(builder, userId) {
  builder.addFieldInt64(2, userId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} userNicknameOffset
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.addUserNickname = function(builder, userNicknameOffset) {
  builder.addFieldOffset(3, userNicknameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} titleOffset
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.addTitle = function(builder, titleOffset) {
  builder.addFieldOffset(4, titleOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} contentType
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.addContentType = function(builder, contentType) {
  builder.addFieldInt32(5, contentType, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} contentOffset
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.addContent = function(builder, contentOffset) {
  builder.addFieldOffset(6, contentOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} privType
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.addPrivType = function(builder, privType) {
  builder.addFieldInt32(7, privType, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} whiteListOffset
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.addWhiteList = function(builder, whiteListOffset) {
  builder.addFieldOffset(8, whiteListOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} blackListOffset
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.addBlackList = function(builder, blackListOffset) {
  builder.addFieldOffset(9, blackListOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.endT_MOMENTS_ARTICLE_ADD_RQ = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
momentspack.T_MOMENTS_ARTICLE_ADD_RQ.finishT_MOMENTS_ARTICLE_ADD_RQBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.momentspack = momentspack;
