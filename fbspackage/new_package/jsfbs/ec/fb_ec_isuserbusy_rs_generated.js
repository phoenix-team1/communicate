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
var ecpack = ecpack || {};

/**
 * @constructor
 */
ecpack.T_EC_ISUSERBUSY_RS = function() {
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
 * @returns {ecpack.T_EC_ISUSERBUSY_RS}
 */
ecpack.T_EC_ISUSERBUSY_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {ecpack.T_EC_ISUSERBUSY_RS=} obj
 * @returns {ecpack.T_EC_ISUSERBUSY_RS}
 */
ecpack.T_EC_ISUSERBUSY_RS.getRootAsT_EC_ISUSERBUSY_RS = function(bb, obj) {
  return (obj || new ecpack.T_EC_ISUSERBUSY_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
ecpack.T_EC_ISUSERBUSY_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
ecpack.T_EC_ISUSERBUSY_RS.prototype.bId = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
ecpack.T_EC_ISUSERBUSY_RS.prototype.cId = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
ecpack.T_EC_ISUSERBUSY_RS.prototype.status = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
ecpack.T_EC_ISUSERBUSY_RS.startT_EC_ISUSERBUSY_RS = function(builder) {
  builder.startObject(4);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
ecpack.T_EC_ISUSERBUSY_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} bId
 */
ecpack.T_EC_ISUSERBUSY_RS.addBId = function(builder, bId) {
  builder.addFieldInt64(1, bId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} cId
 */
ecpack.T_EC_ISUSERBUSY_RS.addCId = function(builder, cId) {
  builder.addFieldInt64(2, cId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} status
 */
ecpack.T_EC_ISUSERBUSY_RS.addStatus = function(builder, status) {
  builder.addFieldInt32(3, status, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
ecpack.T_EC_ISUSERBUSY_RS.endT_EC_ISUSERBUSY_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
ecpack.T_EC_ISUSERBUSY_RS.finishT_EC_ISUSERBUSY_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.ecpack = ecpack;
